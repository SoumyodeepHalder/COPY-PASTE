<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #localVideo {
            width: 300px;
            height: 300px;
        }
    </style>
</head>

<body>
    <h1>hello world</h1>
    <video id="localVideo"autoplay></video>
    <script>
        const localVideo = document.getElementById('localVideo');
        const startMyVideo = async () => {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: false, video: true });
            localVideo.srcObject = stream;
        }
        startMyVideo ();
    </script>
</body>

</html>
