from django.db import models

# Create your models here.
class News(models.Model):
    headline = models.CharField(max_length=200)
    body = models.TextField()
    date = models.DateField()

    def __str__(self):
        display_words = self.headline
        if len(display_words) > 10:
            display_words = display_words[:10] + '...'
        return display_words

