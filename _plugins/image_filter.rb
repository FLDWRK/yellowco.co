module Jekyll
  module ImageFilter
    def image_src(image)
      return image if image =~ /^http/
      case ENV['JEKYLL_ENV']
      when 'staging' then
        "https://staging-yellowco-co.imgix.net#{image}"
      when 'production' then
        "https://yellowco-co.imgix.net#{image}"
      else
        image
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::ImageFilter)
