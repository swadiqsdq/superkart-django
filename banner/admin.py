from django.contrib import admin

from banner.models import Banner

class BannerAdmin(admin.ModelAdmin):
    list_display = ['title','is_active','created_date']
    list_filter = ('is_active',)
# Register your models here.
admin.site.register(Banner)