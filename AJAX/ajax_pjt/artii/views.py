from django.shortcuts import render
from django.http import JsonResponse
import art as a
# Create your views here.
def ping(request):
    return render(request, 'art/ping.html')


def pong(request):
    user_input = request.GET.get('inputText')
    art_text = a.text2art(user_input)
    data = {
        'success': True,
        'art_text': art_text,
    }
    return JsonResponse(data)
