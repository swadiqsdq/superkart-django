from django import forms

from orders.models import Order
from store.models import *


class OrderForm(forms.ModelForm):
    class Meta:
        model = Order
        fields = ['first_name', 'last_name', 'email', 'phone', 'address_line_1', 'address_line_2', 'country','city', 'state','order_note']
