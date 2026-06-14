from django.urls import path
from .views import product_list, product_detail, BannerListView

urlpatterns = [
    path("", product_list),
    path("banners/", BannerListView.as_view()),
    path("<int:id>/", product_detail),
]