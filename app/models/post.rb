class Post < ApplicationRecord
  validates :author_id, :body, presence: true;
  has_attached_file :avatar, styles: { medium: "300x300>", thumb: "100x100>" },
                    default_url: "/images/:style/missing.png"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/

  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id

end
