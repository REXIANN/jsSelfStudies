from django.shortcuts import get_object_or_404, render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .models import Article
from .serializers import ArticleListSerializer, ArticleSerializer


# Create your views here.
@api_view(['GET'])
def index(request):
    articles = Article.objects.all()
    serializer = ArticleListSerializer(articles, many=True)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create(request):
    serializer = ArticleSerializer(data=request.data)
    # print(request.data)

    if serializer.is_valid():
        serializer.save(user=request.user)
        # print(serializer.data)
        return Response(serializer.data)
