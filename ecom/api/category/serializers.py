from rest_framework import serializers

from .models import Category

class CategorySerializers(serializers.Serialzier):
    class Meta:
        model =  Category
        field = ('name', 'description')