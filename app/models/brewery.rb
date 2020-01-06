class Brewery < ApplicationRecord
    
    def upvote
        self.ranking += 1
        self.save
    end

    def downvote
        self.ranking -= 1
        self.save
    end
end
