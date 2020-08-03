from rest_framework import serializers
from accounts.serializers import UserSerializer
from .models import Article


# index
class ArticleListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = (
            'id',
            'title',
            'user',
        )


# create
class ArticleSerializer(serializers.ModelSerializer):
    user = UserSerializer(required=False)

    class Meta:
        model = Article
        fields = '__all__'
        read_only_fields = (
            'id',
            'user',
            'created_at',
            'updated_at',
        )
