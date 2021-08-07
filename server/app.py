from flask import Flask, request, jsonify
from log import MyLogger, Loglevel

# 로그 생성
my_logger = MyLogger(level=Loglevel.INFO, name="root")
logger = my_logger.getLogger()

# flask app 설정
app = Flask(__name__)


# flask test code
@app.route("/")
def test():
    return "hello"


# post code
@app.route("/data", methods=['POST'])
def test2():
    data = request.get_json()
    logger.info(data)
    return "hello"


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
