import time
import logging
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import APIException
from .serializers import NoteSerializer
from .models import Note
from backend.observability import MetricType

logger = logging.getLogger(__name__)

class NoteListCreate(generics.ListCreateAPIView):
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(author=user).select_related('course')

    def list(self, request, *args, **kwargs):
        start_time = time.perf_counter()
        
        try:
            response = super().list(request, *args, **kwargs)
            duration = (time.perf_counter() - start_time) * 1000
            
            logger.info(
                "Notes list fetched",
                extra={
                    "metric_type": MetricType.LATENCY.value,
                    "action": "list_notes",
                    "item_count": len(response.data),
                    "latency_ms": round(duration, 2),
                    "status": "success"
                }
            )
            return response

        except Exception as e:
            duration = (time.perf_counter() - start_time) * 1000
            logger.error(
                "Failed to list notes",
                extra={
                    "metric_type": MetricType.ERROR.value,
                    "action": "list_notes",
                    "error_type": type(e).__name__,
                    "latency_ms": round(duration, 2),
                    "status": "failure"
                }
            )
            raise e

    def perform_create(self, serializer):
        start_time = time.perf_counter()
        
        try:
            serializer.save(author=self.request.user)
            duration = (time.perf_counter() - start_time) * 1000
            
            logger.info(
                "Note creation record",
                extra={
                    "metric_type": MetricType.LATENCY.value,
                    "action": "create_note",
                    "latency_ms": round(duration, 2),
                    "status": "success"
                }
            )
        except Exception as e:
            duration = (time.perf_counter() - start_time) * 1000
            logger.error(
                "Note creation failed",
                extra={
                    "metric_type": MetricType.ERROR.value,
                    "action": "create_note",
                    "error_detail": str(e),
                    "latency_ms": round(duration, 2),
                    "status": "failure"
                }
            )
            raise APIException("Critical failure during note persistence.")

class NoteDelete(generics.DestroyAPIView):
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Note.objects.filter(author=self.request.user)

    def destroy(self, request, *args, **kwargs):
        start_time = time.perf_counter()
        
        try:
            response = super().destroy(request, *args, **kwargs)
            duration = (time.perf_counter() - start_time) * 1000
            
            logger.info(
                "Resource cleanup executed",
                extra={
                    "metric_type": MetricType.THROUGHPUT.value,
                    "action": "delete_note",
                    "latency_ms": round(duration, 2),
                    "status": "success"
                }
            )
            return response
        except Exception as e:
            logger.error(
                "Resource cleanup failed",
                extra={
                    "metric_type": MetricType.ERROR.value,
                    "action": "delete_note",
                    "error": str(e),
                    "status": "failure"
                }
            )
            raise e