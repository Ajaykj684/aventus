# Generated by Django 4.1.3 on 2022-11-09 03:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("users", "0002_alter_users_options_alter_designation_designation_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="users",
            name="password",
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]
