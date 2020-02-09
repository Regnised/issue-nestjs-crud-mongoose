import { Inject, Injectable } from '@nestjs/common';
import { MongooseCrudService } from '@visurel/nest-crud-mongoose';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { CompanyDto } from './company.dto';
import { CompanySchema } from './company.schema';
import { ICompany } from './company.interface';

@Injectable()
export class CompaniesService extends MongooseCrudService<ICompany> {
  constructor(@Inject('Company') public companyModel: Model<ICompany>) {
    super(companyModel);
  }

  async create(createCatDto: CompanyDto): Promise<ICompany> {
    const createdCat = new this.companyModel(createCatDto);
    return createdCat.save();
  }

  async findAll(): Promise<ICompany[]> {
    return this.companyModel.find().exec();
  }
}
