class User < ApplicationRecord
  has_secure_password

  has_many :posts

  validates :email, :password, presence: true
  validates :email, uniqueness: true
end
