from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Product
from .serializers import ProductSerializer


@api_view(["GET"])
def product_list(request):
    
    products = Product.objects.all()

    serializer = ProductSerializer(
        products,
        many=True
    )

    return Response(serializer.data)
from django.shortcuts import get_object_or_404

@api_view(["GET"])
def product_detail(request, id):
    product = get_object_or_404(Product, id=id)

    serializer = ProductSerializer(product)

    return Response(serializer.data)

from rest_framework import generics
from .models import Banner
from .serializers import BannerSerializer

class BannerListView(generics.ListAPIView):
    queryset = Banner.objects.all()
    serializer_class = BannerSerializer