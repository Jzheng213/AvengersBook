class User < ApplicationRecord
  attr_reader :password


  validates :first_name, :last_name, :password_digest, :email,
            :session_token, :birthday, :gender, presence: true
  validates :gender, inclusion: { in: ['male', 'female', 'enby', 'other']}
  validates :email, uniqueness: true
  validates_format_of :email, :with =>
                      /\A([\w+\-]\.?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i
  validates :password, length: { minimum: 6 }, allow_nil: true

  has_attached_file :cover_pic, default_url: 'avengers_default_cover.jpg'
  has_attached_file :profile_pic,
                    styles: { medium: '300x300>', thumb: '100x100>'},
                    default_url: 'avengers_default_profile.png'
  validates_attachment_content_type :profile_pic, content_type: /\Aimage\/.*\Z/

  after_initialize :ensure_session_token

  has_many :posts,
    foreign_key: :author_id,
    class_name: :Post

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_unique_session_token
    save!
    self.session_token
  end

  private

  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = new_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end
end
