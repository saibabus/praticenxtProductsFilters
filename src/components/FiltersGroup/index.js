import './index.css'
import {BsSearch} from 'react-icons/bs'

const FiltersGroup = props => {
  const rendersearch = () => {
    const {searchInput, changesearchinput, entersearchinput} = props
    const onchangesearchinput = event => {
      changesearchinput(event.target.value)
    }

    const onkeydownenter = event => {
      if (event.key === 'Enter') {
        entersearchinput()
      }
    }

    return (
      <div className="searchCon">
        <input
          type="search"
          className="search"
          placeholder="search"
          value={searchInput}
          onKeyDown={onkeydownenter}
          onChange={onchangesearchinput}
        />
        <BsSearch className="searchIcon" />
      </div>
    )
  }

  const rendercategoryOptionsAll = () => {
    const {categoryOptionsData, activeCategoryId, changeCategoryId} = props
    return categoryOptionsData.map(each => {
      const onClickcategoryItem = () => {
        changeCategoryId(each.categoryId)
      }
      const categorynamestyle =
        each.categoryId === activeCategoryId ? 'eachItem active' : 'eachItem'
      return (
        <li
          className="categoryitemcon"
          key={each.categoryId}
          onClick={onClickcategoryItem}
        >
          <p className={categorynamestyle}>{each.name}</p>
        </li>
      )
    })
  }

  const rendercategoryOptions = () => (
    <ul className="listcon">
      <h1 className="headingText">Category</h1>
      {rendercategoryOptionsAll()}
    </ul>
  )

  const renderratindListAll = () => {
    const {ratingsListData, activeRatingId, changeRatingId} = props
    return ratingsListData.map(each => {
      const onClickratingItem = () => {
        changeRatingId(each.ratingId)
      }

      const ratingnamestyle =
        each.ratingId === activeRatingId ? 'eachItem active' : 'eachItem'

      return (
        <li
          className="ratingeachItemcon"
          key={each.ratingId}
          onClick={onClickratingItem}
        >
          <img
            src={each.imageUrl}
            className="eachimg"
            alt={`rating ${each.ratingId}`}
          />
          <p className={ratingnamestyle}>& up</p>
        </li>
      )
    })
  }

  const renderratindList = () => (
    <ul className="listcon">
      <h1 className="headingText">Rating</h1>
      {renderratindListAll()}
    </ul>
  )
  const {clearFilters} = props
  return (
    <div className="filters-group-container">
      {rendersearch()}
      {rendercategoryOptions()}
      {renderratindList()}
      <button type="button" className="clearButton" onClick={clearFilters}>
        Clear Filters
      </button>
    </div>
  )
}
export default FiltersGroup
