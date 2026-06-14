from django.db import models
from categories.models import Category

class Product(models.Model):
    name = models.CharField(max_length=200)

    category = models.ForeignKey(
        Category,
        on_delete=models.CASCADE
    )

    description = models.TextField()

    image = models.ImageField(
        upload_to="products/",
        blank=True,
        null=True
    )

    brochure = models.FileField(
        upload_to="brochures/",
        blank=True,
        null=True
    )

    is_active = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
    

class Banner(models.Model):
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to='banners/')

    def __str__(self):
        return self.title