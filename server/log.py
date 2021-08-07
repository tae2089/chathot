import logging
from enum import Enum


class MyLogger:

    def __init__(self,level,name):
        self.level = level.value
        self.name = name

    #filter
    def settingLevel(self,logger):
        if self.level == 1 :
            logger.setLevel(logging.INFO)
        elif self.level == 2:
            logger.setLevel(logging.WARNING)
        elif self.level == 3:
            logger.setLevel(logging.ERROR)
        elif self.level == 4:
            logger.setLevel(logging.CRITICAL)
        else:
            logger.setLevel(logging.DEBUG)            
        return logger

    # logger
    def getLogger(self):
            # 로그 생성
        if self.name == "":
            logger = logging.getLogger()
        else:
            logger = logging.getLogger(self.name)
        # 로그의 출력 기준 설정
        formatter = logging.Formatter('%(asctime)s - %(name)s - %(funcName)s - %(levelname)s - %(message)s')
        logger = self.settingLevel(logger)
        logger = self.setting_stream_handler(logger,formatter)
        return logger

    # handler
    def setting_stream_handler(self,logger,formatter):
        # log 출력
        stream_handler = logging.StreamHandler()
        stream_handler.setFormatter(formatter)
        logger.addHandler(stream_handler)
        return logger


    def setting_file_handler(logger,formatter):
        # log를 파일에 출력
        file_handler = logging.FileHandler('my.log')
        file_handler.setFormatter(formatter)
        logger.addHandler(file_handler)
        return logger

class Loglevel(Enum):
    DEBUG = 0
    INFO = 1
    WARNING = 2
    ERROR = 3
    CRITICAL = 4
    




# my_logger = MyLogger(1,"test")
# logger = my_logger.getLogger()

# for i in range(10):
# 	logger.info(f'{i}번째 방문입니다.')
