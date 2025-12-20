from django.http import HttpResponse
from django.shortcuts import render

from banner.models import Banner
from store.models import Product


def home(request):
    products = Product.objects.all().filter(is_available=True)
    banners = Banner.objects.all().filter(is_active=True)

    context = {
        'banners':banners,
        'products':products,
    }
    return render(request,'home.html',context)