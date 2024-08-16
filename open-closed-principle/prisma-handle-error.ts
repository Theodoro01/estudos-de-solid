async function handlePrismaError(error: { code: string }, customMessage?: string) {
    if (error.code === 'P2025') {
        // NotFoundException
        throw new Error(customMessage || 'Not found');
    } else if (error.code === 'P2002') {
        // BadRequestException
        throw new Error(customMessage || 'Unique constraint violation');
    } else if (error.code === 'P2003') {
        // BadRequestException
        throw new Error(customMessage || 'Foreign key constraint violation');
    } else if (error.code === 'P2021') {
        // BadRequestException
        throw new Error(customMessage || 'Invalid parameter');
    } else if (error.code === 'P2022') {
        // BadRequestException
        throw new Error(customMessage || 'Missing required parameter');
    } else if (error.code === 'P2023') {
        // BadRequestException
        throw new Error(customMessage || 'Invalid data format');
    } else if (error.code === 'P2024') {
        // BadRequestException
        throw new Error(customMessage || 'Invalid data value');
    } else if (error.code === 'P2026') {
        // BadRequestException
        throw new Error(customMessage || 'Invalid data length');
    } else if (error.code === 'P2027') {
        // BadRequestException
        throw new Error(customMessage || 'Invalid data range');
    } else {
      throw new Error(customMessage || 'Internal server error');
    }
  }
