from flask import Flask, request, jsonify

app = Flask(__name__)


@app.route("/")
def test():
    return "hello"


@app.route("/data", methods=['POST'])
def test2():
    data = request.get_json()
    print(data)
    return "hello"


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
