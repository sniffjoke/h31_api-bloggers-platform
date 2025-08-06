import { Injectable } from '@nestjs/common';
import { BlogsRepositoryTO } from '../infrastructure/blogs.repository.to';
import { BanInfoForUserDto } from '../api/models/input/ban-user-for-blog.dto';

@Injectable()
export class BlogsService {

  constructor(
    private readonly blogsRepository: BlogsRepositoryTO,
  ) {
  }

  async banUserForBlog(userId: string, dto: BanInfoForUserDto): Promise<void> {
    return await this.blogsRepository.banUserForBlog(dto)
  }

}
