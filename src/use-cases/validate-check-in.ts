import { CheckIn } from "@prisma/client";

import { CheckInsRepository } from "@/repositories/check-ins-repository";
import { ResourceNotFoundError } from "./errors/resource-not-found-error";

interface ValidateValidateCheckInUseCaseRequest {
  checkInId: string;
}

interface ValidateValidateCheckInUseCaseRespose {
  checkIn: CheckIn;
}

export class ValidateCheckInUseCase {
  constructor(private checkInsRepository: CheckInsRepository) {}

  async execute({
    checkInId,
  }: ValidateValidateCheckInUseCaseRequest): Promise<ValidateValidateCheckInUseCaseRespose> {
    const checkIn = await this.checkInsRepository.findById(checkInId);

    if (!checkIn) {
      throw new ResourceNotFoundError();
    }

    checkIn.validated_at = new Date();

    return {
      checkIn,
    };
  }
}
