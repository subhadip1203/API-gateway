from fastapi import FastAPI

from pydantic import BaseModel


class Item(BaseModel):
    name: str
    description: str | None = None
    price: float


app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int):
    return {"item_id": item_id, "user_id": 12}

@app.post("/items/")
async def create_item(item: Item):
    return {
        "id" : 10,
        "name": item.name,
        "price" : item.price
    }
