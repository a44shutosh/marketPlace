/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { AdminWhereUniqueInput } from "../../admin/base/AdminWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class AdminUpdateManyWithoutUsersInput {
  @Field(() => [AdminWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AdminWhereUniqueInput],
  })
  connect?: Array<AdminWhereUniqueInput>;

  @Field(() => [AdminWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AdminWhereUniqueInput],
  })
  disconnect?: Array<AdminWhereUniqueInput>;

  @Field(() => [AdminWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AdminWhereUniqueInput],
  })
  set?: Array<AdminWhereUniqueInput>;
}

export { AdminUpdateManyWithoutUsersInput as AdminUpdateManyWithoutUsersInput };
