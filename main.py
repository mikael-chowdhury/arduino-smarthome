import pyfirmata
import threading
from flask import Flask, request

board = None
led = None

def thr1():
    global board
    global led
    board = pyfirmata.Arduino('/dev/tty.usbmodem1101')
    # board = pyfirmata.Arduino('COM4')

    led = board.get_pin('d:13:o')

    print("Connected to board")

    while True:
        pass

arduino_thread = threading.Thread(target=thr1).start()

app = Flask(__name__)

@app.route("/setpin", methods=["POST"])
def setpin():
    if board is not None:
        data = request.get_json()["data"]

        pin = data["pin"]
        value = data["value"]

        board.digital[pin].write(value)

        return "complete"

    else:
        return "loading"

if __name__ == "__main__":
    app.run(debug = True, port=8080)