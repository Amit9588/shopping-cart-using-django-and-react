from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from django.contrib.auth.decorators import login_required
from django.contrib.auth import get_user_model
from django.views.decorators.csrf import csrf_exempt

import braintree
# Create your views here.
gateway = braintree.BraintreeGateway(
    braintree.Configuration(
        braintree.Environment.Sandbox,
        merchant_id ="hmxcgbbkthq5pm6t",
        public_key="r6p256rn35rnjtc6",
        private_key="ec1549c70911d02351cb3e94f39dc199"
        
    
    )
)

def validate_user_session(id,token):
    UserModel = get_user_model()

    try:
        user = UserModel.objects.get(pk=id)
        if user.session_token == token:
            return True
        return False
    except UserModel.DoesNotExist:
        return False
    
@csrf_exempt
def generate_token(request,id,token):
    if not validate_user_session(id,token):
        return JsonResponse({'error':'Invalid session, Please login again'})
    
    return JsonResponse({'clientToken':gateway.client_token.generate(),'success':True})

csrf_exempt
def process_payment(request,id,token):
    if not validate_user_session(id,token):
        return JsonResponse({'error':'Invalid session, Please login again'})
    
    nonce_from_the_client= request.POST["paymentMethodnonce"]
    
    amount_from_the_client= request.POST["amount"]

    result = gateway.transaction.sale({
        "amount":amount_from_the_client,
        "payment_method_nonce":nonce_from_the_client,
        "options":{
                "Submit_for_settlement":True
        }
    })
    if result.is_success:
        return JsonResponse({
            "sucess": result.is_success,
            'transaction':{"id": result.transaction.id,"amount":result.transaction.amount}
        })
    
    
