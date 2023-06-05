# Parent exception class for all expected backend exceptions
# Will be caught and handled by the platform_exception_handler
# Shoutout https://platformatic.dev/
class PlatformaticError(Exception):
    detail: str

    def __init__(self, base_exception: Exception, detail: str = ""):
        super().__init__(base_exception)
        self.detail = detail


class OpenAIError(PlatformaticError):
    pass


class ReplicateError(PlatformaticError):
    pass

