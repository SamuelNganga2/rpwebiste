import React, { useState, useRef, useEffect } from 'react'
import audio1 from '../assets/From Stained to Sent 1.mp3'
import audio2 from '../assets/From Stained to Sent - 2.mp3'

interface FeaturedSermonsProps {
  onNavigate: (page: string) => void
}

const FeaturedSermons: React.FC<FeaturedSermonsProps> = ({ onNavigate }) => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<number | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  const featuredSermons = [
    {
      title: "Walking in Faith",
      description: "Discover how to live a life of unwavering faith in God's promises.",
      date: "December 15, 2024",
      hasAudio: true,
      hasPDF: true,
      hasVideo: false,
      audioUrl: audio1
    },
    {
      title: "The Power of Prayer",
      description: "Understanding the transformative power of prayer in our daily lives.",
      date: "December 8, 2024",
      hasAudio: true,
      hasPDF: true,
      hasVideo: false,
      audioUrl: audio2
    },
    {
      title: "God's Grace and Mercy",
      description: "Exploring the depths of God's unending grace and mercy for His children.",
      date: "December 1, 2024",
      hasAudio: true,
      hasPDF: true,
      hasVideo: false,
      audioUrl: audio1
    }
  ]

  const handlePlayPause = (index: number) => {
    if (currentlyPlaying === index && isPlaying) {
      audioRef.current?.pause()
      setIsPlaying(false)
    } else {
      if (currentlyPlaying !== index) {
        const sermon = featuredSermons[index]
        if (sermon && audioRef.current) {
          audioRef.current.src = sermon.audioUrl
          audioRef.current.load()
        }
      }
      audioRef.current?.play()
      setCurrentlyPlaying(index)
      setIsPlaying(true)
    }
  }

  const handleDownload = (sermon: any) => {
    const link = document.createElement('a')
    link.href = sermon.audioUrl
    link.download = `${sermon.title}.mp3`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => setCurrentTime(audio.currentTime)
    const updateDuration = () => setDuration(audio.duration)
    const handleEnded = () => {
      setIsPlaying(false)
      setCurrentlyPlaying(null)
    }

    audio.addEventListener('timeupdate', updateTime)
    audio.addEventListener('loadedmetadata', updateDuration)
    audio.addEventListener('ended', handleEnded)

    return () => {
      audio.removeEventListener('timeupdate', updateTime)
      audio.removeEventListener('loadedmetadata', updateDuration)
      audio.removeEventListener('ended', handleEnded)
    }
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-white dark:from-gray-800 dark:to-gray-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-800 dark:text-white mb-6 font-serif">
            Featured Sermons
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary-500 to-secondary-600 mx-auto mb-8"></div>
          <p className="text-xl text-accent-600 dark:text-gray-300 max-w-3xl mx-auto">
            Be blessed and inspired by these powerful messages from God's Word
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredSermons.map((sermon, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-primary-500 to-spiritual-500 flex items-center justify-center">
                <button 
                  onClick={() => handlePlayPause(index)}
                  className="text-white text-6xl group-hover:scale-110 transition-transform duration-300 hover:opacity-80"
                >
                  <i className={`bi ${
                    currentlyPlaying === index && isPlaying
                      ? 'bi-pause-circle-fill'
                      : 'bi-play-circle-fill'
                  }`}></i>
                </button>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-800 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-gray-300 transition-colors duration-300">
                  {sermon.title}
                </h3>
                <p className="text-accent-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {sermon.description}
                </p>
                <p className="text-sm text-accent-500 dark:text-gray-400 mb-6">{sermon.date}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-3">
                    {sermon.hasAudio && (
                      <button 
                        onClick={() => handlePlayPause(index)}
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                          currentlyPlaying === index && isPlaying
                            ? 'bg-green-500 hover:bg-green-600'
                            : 'bg-green-100 dark:bg-green-900 hover:bg-green-200 dark:hover:bg-green-800'
                        }`}
                      >
                        <i className={`bi ${
                          currentlyPlaying === index && isPlaying
                            ? 'bi-pause-fill'
                            : 'bi-headphones'
                        } ${
                          currentlyPlaying === index && isPlaying
                            ? 'text-white'
                            : 'text-green-600 dark:text-green-400'
                        } text-sm`}></i>
                      </button>
                    )}
                    {sermon.hasPDF && (
                      <div className="w-8 h-8 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center">
                        <i className="bi bi-file-pdf text-red-600 dark:text-red-400 text-sm"></i>
                      </div>
                    )}
                    {sermon.hasVideo && (
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                        <i className="bi bi-play-btn text-blue-600 dark:text-blue-400 text-sm"></i>
                      </div>
                    )}
                  </div>
                  
                  <button 
                    onClick={() => handleDownload(sermon)}
                    className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors duration-300"
                  >
                    <i className="bi bi-download text-sm"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' })
              onNavigate('sermons')
            }}
            className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            View All Sermons
            <i className="bi bi-arrow-right ml-2"></i>
          </button>
        </div>
      </div>

      {/* Audio Player */}
      {currentlyPlaying !== null && (
        <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-600 shadow-2xl p-4 z-50 transition-colors duration-300">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => handlePlayPause(currentlyPlaying)}
                className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <i className={`bi ${isPlaying ? 'bi-pause-fill' : 'bi-play-fill'} text-white text-xl transition-all duration-300`}></i>
              </button>
              
              <div className="flex-1">
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-semibold text-primary-800 dark:text-white">
                    {featuredSermons[currentlyPlaying]?.title}
                  </span>
                  <span className="text-xs text-accent-500 dark:text-gray-400">
                    {formatTime(currentTime)} / {formatTime(duration || 0)}
                  </span>
                </div>
                <div className="mt-2">
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 cursor-pointer" onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect()
                    const x = e.clientX - rect.left
                    const percentage = x / rect.width
                    if (audioRef.current && duration) {
                      audioRef.current.currentTime = percentage * duration
                    }
                  }}>
                    <div 
                      className="bg-green-500 h-2 rounded-full transition-all duration-300 relative"
                      style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
                    >
                      <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-md"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <button
                onClick={() => {
                  audioRef.current?.pause()
                  setIsPlaying(false)
                  setCurrentlyPlaying(null)
                }}
                className="w-8 h-8 flex items-center justify-center text-accent-500 dark:text-gray-400 hover:text-accent-700 dark:hover:text-gray-200 transition-colors duration-300"
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
          </div>
        </div>
      )}

      <audio ref={audioRef} className="hidden" />
    </section>
  )
}

export default FeaturedSermons
