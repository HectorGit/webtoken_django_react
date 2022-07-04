from django.shortcuts import render

#https://dev.to/nagatodev/how-to-connect-django-to-reactjs-part-2-2oje
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import DeskUserDataSerializer
from .models import DeskUserData

# Create your views here.

#following the tutorial : https://dev.to/nagatodev/how-to-connect-django-to-reactjs-1a71
def front(request):
    context = { }
    return render(request, "index.html", context)


@api_view(['GET', 'POST'])
def deskUserData(request, id):

    if request.method == 'GET':
        try:
            deskData = DeskUserData.objects.all().filter(user_id=id).filter(date__range=["2022-03-29", "2022-03-29"])
            serializer = DeskUserDataSerializer(deskData, many=True)
            return Response(serializer.data)
        except DeskUserData.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    elif request.method == 'POST':
        serializer = DeskUserDataSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# ------------imported requests library to ping our api and get data that we can graph.----------------------------

import requests

API_URL = "https://temporary-ergonomyx-api-clone.herokuapp.com" #used the staging API for now (can be changed)
# API_URL = "http://localhost:5001" #used localhost for now (can be changed) use this if running on local. 

def fetch_user_data_insecure(request):

    #this is sergio's user id... it's hardcoded in here!
    user_id = 9

    url = API_URL + '/get_desk_data_for_user_id/' + str(user_id)
                    #made a new INSECURE endpoint where you just get the data directly without authentication
                    #as long as you know the USERS ID in the ergo database. 
                    #this endpoint in the API is temporary and we can disable it later on.

    r_desk_data = requests.get(url) #we're bypassing authentication at this time

    context = {'desk_data' : []}

    if(r_desk_data.status_code==200):
        r_desk_data_json = r_desk_data.json()
        context['desk_data'] = r_desk_data_json

    return render(request, "deskdata/fetched_data.html", context)

def fetch_user_data_secure(request):

    # ---------------------------------------- A - LOGIN AND GET TOKEN TO BE ABLE TO MAKE MORE REQUESTS BY HAVING THE TOKEN.

    # DOWNSIDE - CREDENTIALS ARE REQUIRED.

    username = 'hector_perez'
    password = '128DirectoryEntry'

    url = API_URL + '/login'
    login_information = {
        "username" : username,
        "password" : password
    }
    r1 = requests.post(url, data = login_information)
    token_given = r1.json()['token']
    print("token obtained ", token_given)

    # ---------------------------------------- B - FETCH THE USERS DESK DATA

    context = {'desk_data' : []}

    url = API_URL + '/get_desk_data' #this endpoint already exists 👍🏽 (and its secure [expects a token])
    r2 = requests.get(url, headers = {"Authorization": 'Bearer ' + str(token_given)})

    if(r2.status_code == 200):
        print("/get_desk_data result was status 200")
        data = r2.json()
        print("data: ", data)
        context['desk_data'] = data

    return render(request, "deskdata/fetched_data.html", context)