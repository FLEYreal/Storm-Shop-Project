from .models import *
from datetime import datetime
from .serializers import *
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from django.http import HttpResponse
from rest_framework.authtoken.models import Token
from django.http import HttpResponseForbidden

def query_handler(request):
    # Получаем токен из заголовка Authorization
    authorization_header = request.META.get('HTTP_AUTHORIZATION', '')
    
    if authorization_header.startswith('Token '):
        token = authorization_header.split('Token ')[1]
        
        try:
            # Проверяем наличие токена в базе данных
            token_obj = Token.objects.get(key=token)

            # Получаем пользователя, связанного с токеном
            user = token_obj.user

            # Ваш код обработки запроса
            name = request.GET.get('name')
            values = int(request.GET.get('value'))

            # Проверяем наличие записи в базе данных
            record_exists = Action.objects.filter(name=name).exists()

            if record_exists:
                records = Action.objects.get(name=name)
                records.value += values
                records.save()
            else:
                Action.objects.update_or_create(name=name, value=values)

            return HttpResponse('Authorized')
        except Token.DoesNotExist:
            return HttpResponseForbidden('неавторизован')
    else:
        return HttpResponseForbidden('токен не получен')


def query_handler_time(request):
    authorization_header = request.META.get('HTTP_AUTHORIZATION', '')
    
    if authorization_header.startswith('Token '):
        token = authorization_header.split('Token ')[1]
        
        try:
            # Проверяем наличие токена в базе данных
            token_obj = Token.objects.get(key=token)

            # Получаем пользователя, связанного с токеном
            user = token_obj.user 

            #помещаем дату отправление в date
            date = datetime.now().date()
            values = int(request.GET.get('value'))

            record_exists = Viewrs.objects.filter(date=date).exists()

            if record_exists: 
                #ищем объект у которого name такойже как и тот который нам в поступил в запросе
                records = Viewrs.objects.get(date=date)
                records.value += values  
                records.save()
            else:
                Viewrs.objects.update_or_create(date=date, value=values)   
            return HttpResponse('Authorized')
        except Token.DoesNotExist:
            return HttpResponseForbidden('неавторизован')
    else:
        return HttpResponseForbidden('токен не получен')
