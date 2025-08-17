# server.js Notes

## Step 1: http module include करना

Node.js का http module import किया जाता है।

Node.js की standard library में networking का first-class support already built-in होता है।

## Step 2: createServer() method

http.createServer() नया HTTP server बनाता है और उसे return करता है।

## Step 3: Server listen करना

Server को एक port और hostname पर listen करने के लिए set किया जाता है।

जब server ready हो जाता है → ek callback run होता है (yaha console me log aata hai “Server running”).

## Step 4: Request Event

जब भी कोई नया HTTP request aata hai, server ka request event trigger hota hai।

Ye event do objects provide karta hai:

request (http.IncomingMessage) → client ki taraf se bheje gaye data (headers, body, etc.)

response (http.ServerResponse) → client ko wapas bhejna wala data

## Step 5: Response handle karna

res.statusCode = 200; → iska matlab hai response successful hai।

res.setHeader('Content-Type', 'text/plain'); → ye header set karta hai, yaha plain text ke liye।

res.end('Hello World\n'); → ye client ko response bhej deta hai aur connection close kar deta hai।