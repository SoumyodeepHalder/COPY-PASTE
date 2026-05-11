# cell 1
from google.colab import drive
drive.mount('/content/drive')

# cell 2
import requests

url = "https://hub.lotuscdn.club/33c6f663e72925d702df918458cdfee2?token=1778526493124"
# Specify the exact path and filename in your Drive
save_path = "/content/drive/MyDrive/pluribus.zip"

response = requests.get(url, stream=True)
with open(save_path, "wb") as file:
    for block in response.iter_content(chunk_size=1024):
        if block:
            file.write(block)
print("Download complete!")
