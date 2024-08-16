interface ErrorResponse {
    code: number,
    error_type: string,
    shortMessage: string,
    message: string
}
enum BadRequestExceptionCodes {
    UNIQUE_CONSTRAINT_VIOLATION = 'P2002',
    FOREIGN_KEY_CONSTRAINT_VIOLATION = 'P2003',
    INVALID_PARAMETER = 'P2021',
    MISSING_REQUIRED_PARAMETER = "P2022",
    INVALID_DATA_FORMAT = "P2023",
    INVALID_DATA_VALUE = "P2024",
    INVALID_DATA_LENGTH = "P2026",
    INVALID_DATA_RANGE = "P2027",
}
const errors = {
    [BadRequestExceptionCodes.UNIQUE_CONSTRAINT_VIOLATION]: 'Unique constraint violation',
    [BadRequestExceptionCodes.FOREIGN_KEY_CONSTRAINT_VIOLATION]: 'Foreign key constraint violation',
    [BadRequestExceptionCodes.INVALID_PARAMETER]: 'Invalid parameter',
    [BadRequestExceptionCodes.MISSING_REQUIRED_PARAMETER]: 'Missing required parameter',
    [BadRequestExceptionCodes.INVALID_DATA_FORMAT]: 'Invalid data format',
    [BadRequestExceptionCodes.INVALID_DATA_VALUE]: 'Invalid data value',
    [BadRequestExceptionCodes.INVALID_DATA_LENGTH]: 'Invalid data length',
    [BadRequestExceptionCodes.INVALID_DATA_RANGE]: 'Invalid data range',
}

interface ErrorException {
    error(): ErrorResponse;
}


class NotFoundException implements ErrorException {
    private code: number = 404;
    private error_type: string;
    private shortMessage: string = "Not Found";
    private message: string;

    constructor(error_type: string, message: string){
        this.message = message
        this.error_type = error_type
    }

    error(): ErrorResponse {
        const errorResponse = {
            code: this.code,
            error_type: this.error_type,
            shortMessage: this.shortMessage,
            message: this.message,
        }
        console.log(errorResponse)
        return errorResponse
    }
}

class BadRequestException implements ErrorException {
    private code: number = 400;
    private error_type: string;
    private shortMessage: string = "Bad Request";
    private message: string;

    constructor(error_type: string){
        this.error_type = error_type
        this.message = errors[error_type]
    }
    
    error(): ErrorResponse {
        const errorResponse = {
            code: this.code,
            error_type: this.error_type,
            shortMessage: this.shortMessage,
            message: this.message,
        }
        console.log(errorResponse)
        return errorResponse
    }
}

class ErrorProcessor {
    protected error: ErrorResponse;

    processor(exception: ErrorException){
        return this.error = exception.error()
    }
}

const notFound = new NotFoundException("P2025", "Not Found")

const errorProcessor = new ErrorProcessor()
const errorNotFound = errorProcessor.processor(notFound)

for(const value of Object.values(BadRequestExceptionCodes)){
    const badRequest = new BadRequestException(value)
    errorProcessor.processor(badRequest)
}