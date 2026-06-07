from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import Lead
from .serializers import LeadSerializer


@api_view(["POST"])
def create_lead(request):
    serializer = LeadSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(
            {"message": "Inquiry submitted successfully"},
            status=status.HTTP_201_CREATED
        )

    return Response(
        serializer.errors,
        status=status.HTTP_400_BAD_REQUEST
    )