import { Prisma, CheckIn } from "@prisma/client";
import { randomUUID } from "crypto";

import { CheckInsRepository } from "../check-ins-repository";

export class InMemoryCheckInsRepository implements CheckInsRepository {
  public itens: CheckIn[] = [];

  async create(data: Prisma.CheckInUncheckedCreateInput) {
    const checkIn = {
      id: randomUUID(),
      user_id: data.user_id,
      gym_id: data.gym_id,
      validated_at: data.validated_at ? new Date(data.validated_at) : null,
      created_at: new Date(),
    };

    this.itens.push(checkIn);

    return checkIn;
  }
}
