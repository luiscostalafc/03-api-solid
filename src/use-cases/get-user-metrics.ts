import { CheckIn } from "@prisma/client";

import { CheckInsRepository } from "@/repositories/check-ins-repository";

interface GetUserMetricsUseCaseRequest {
  userId: string;
}

interface GetUserMetricsUseCaseRespose {
  checkInsCount: number;
}

export class GetUserMetricsUseCase {
  constructor(private checkInsRepository: CheckInsRepository) {}

  async execute({
    userId,
  }: GetUserMetricsUseCaseRequest): Promise<GetUserMetricsUseCaseRespose> {
    const checkInsCount = await this.checkInsRepository.countByUserId(userId);

    return {
      checkInsCount,
    };
  }
}
