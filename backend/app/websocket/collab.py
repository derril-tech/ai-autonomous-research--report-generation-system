from fastapi import WebSocket

async def collab_endpoint(websocket: WebSocket):
    await websocket.accept()
    await websocket.send_text("Real-time collaboration started.")
    await websocket.close()
