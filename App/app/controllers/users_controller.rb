class UsersController < ApplicationController
  def create
    puts "*" * 100
    puts "I hit the route"
    puts params
    puts "*" * 100
  end
end
