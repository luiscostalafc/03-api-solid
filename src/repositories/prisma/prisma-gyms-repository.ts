import { Prisma } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";
import { FindManyNearbyParams, GymsRepository } from "../gyms-repository";

export class PrismaGymsRepository implements GymsRepository {
  async findById(id: string) {
    throw new Error("Method not implemented.");
  }
  async findManyNearby(params: FindManyNearbyParams) {
    throw new Error("Method not implemented.");
  }
  async searchMany(query: string, page: number) {
    throw new Error("Method not implemented.");
  }
  async create(data: Prisma.GymCreateInput) {
    throw new Error("Method not implemented.");
  }
}
