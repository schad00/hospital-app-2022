# Generated by Django 3.2.10 on 2021-12-28 13:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_alter_users_is_active'),
    ]

    operations = [
        migrations.AlterField(
            model_name='users',
            name='is_active',
            field=models.BooleanField(blank=True, default=False),
        ),
    ]
