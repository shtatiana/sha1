<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>SHA1</title>
    <script>
      
      async function sha1() {
        const encoder = new TextEncoder()
        const msgUint8 = encoder.encode(document.getElementById("inp").value);                           // encode as (utf-8) Uint8Array
        const hashBuffer = await crypto.subtle.digest('SHA-1', msgUint8);           // hash the message
        const hashArray = Array.from(new Uint8Array(hashBuffer));                     // convert buffer to byte array
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); // convert bytes to hex string
        document.getElementById("inp").value = hashHex;
        return hashHex;
      }
    </script>
  </head>
  <body>
    <h4>tatiana.shirshikova</h4>
    <input name="inp" id="inp" />
    <button id="bt" name="bt" onclick="sha1()">Go!</button>
  </body>
</html>