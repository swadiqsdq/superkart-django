from django.contrib import admin

from .models import *

class orderProductInline(admin.TabularInline):
    model = OrderProduct
    readonly_fields = ('payment','user','product','quantity','product_price','ordered')
    # // this means the extra field remove
    extra = 0

class OrderAdmin(admin.ModelAdmin):
    list_display = ['order_number','full_name','phone','email','city','state','order_total','tax','status','is_ordered','created_at']
    list_filter = ['status','is_ordered']
    search_fields = ['order_number','first_name','last_name','phone','email']
    list_per_page = 20
    inlines = [orderProductInline]


# Register your models here.
admin.site.register(Order,OrderAdmin)
admin.site.register(Payment)
admin.site.register(OrderProduct)