class User < ApplicationRecord
    validates :email, :session_token, presence: true, uniqueness: true
    validates :password_digest, presence: true

    attr_reader :password
    before_validation :ensure_session_token

    has_many :my_lists,
    foreign_key: :user_id,
    class_name: :MyList

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)

        if user && user.is_password?(password)
            return user
        else
            return nil
        end
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.base64
    end

    def reset_session_token!
        self.session_token = SecureRandom.base64
        self.save!
        self.session_token
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end
end
