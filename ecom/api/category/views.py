from rest_frameworks import viewsets
from .serializers import CategorySerializers
from .models import Category
# Create your views here.
class CategoryViewset(viewsets.ModelViewSet):
    queryset = Category.objects.all().order_by('name')
    serialize_class = CategorySerializers