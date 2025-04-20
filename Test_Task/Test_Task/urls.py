from django.contrib import admin
from django.urls import path
from rest_framework.routers import SimpleRouter
from Tsk.views import ImageViewSet, forms_app, image_app

router = SimpleRouter()
router.register(r'api/image', ImageViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('images/', image_app),
    path('forms/', forms_app),
]
urlpatterns += router.urls
