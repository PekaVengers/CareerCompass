# Generated by Django 4.2.4 on 2023-08-06 12:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_rename_aspiration_userdetails_aspiration_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='userdetails',
            old_name='location',
            new_name='education',
        ),
    ]
