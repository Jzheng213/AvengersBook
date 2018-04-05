class Post < ApplicationRecord
  validates :author_id, presence: true;
  validates :body, presence: { if: -> {content.blank?}}
  has_attached_file :content, styles: { medium: "300x300>", thumb: "100x100>" },
                    default_url: ""
  validates_attachment_content_type :content, content_type: /\Aimage\/.*\z/

  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id

  belongs_to :wall_owner,
    class_name: :User,
    foreign_key: :wall_owner_id,
    optional: true

  has_many :comments,
    class_name: :Comment,
    foreign_key: :post_id

  def remove_content
    self.content.clear
  end
end
