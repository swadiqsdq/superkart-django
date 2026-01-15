from django.urls import path
from . import views
urlpatterns = [
    path('place_order/', views.place_order, name='place_order'),
    path('payments/', views.payments, name='payments'),
    path('order_complete/', views.order_complete, name='order_complete'),
    path('invoice_pdf/<str:order_number>/',views.invoice_pdf, name='invoice_pdf'),

]