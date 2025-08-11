import { Injectable, NotFoundException } from '@nestjs/common';
import { BlogsRepositoryTO } from '../infrastructure/blogs.repository.to';
import { BanInfoForUserDto } from '../api/models/input/ban-user-for-blog.dto';
import { UsersService } from '../../users/application/users.service';

@Injectable()
export class BlogsService {

  constructor(
    private readonly blogsRepository: BlogsRepositoryTO,
    private readonly usersService: UsersService,
  ) {
  }

  async banUserForBlog(bearerHeader: string, dto: BanInfoForUserDto, userId: string) {
    const curUser = await this.usersService.getUserByAuthToken(bearerHeader);
    // console.log('user: ', user);
    const user = await this.usersService.findUserById(userId);
    if (!user) throw new NotFoundException(`User with id ${userId} not found`);
    return await this.blogsRepository.banUserForBlog(dto, user)
  }

  async getBannedUsers(blogId: string) {
    const users = await this.blogsRepository.getUsersForCurrentBlog(blogId)
    // console.log('users: ', users);
    return users
  }

}
